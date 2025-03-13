# piveau-X Catalog

The piveau-X Catalog extends the piveau platform, providing a catalog specifically tailored for Gaia-X-compliant Data Spaces. It supports the publication and discovery of Gaia-X resources—such as Legal Participants and Service Offerings—using semantic web technologies. The catalog ensures compliance with Gaia-X standards by leveraging a separate signing service to sign Verifiable Credentials (VC) and the Gaia-X Digital Clearing House (GXDCH) to verify VCs, ensuring that all resources in the piveau-X catalog are Gaia-X compliant.

## Setup

Clone the piveau-X [repo](https://gitlab.com/piveau/hub/piveau-x), which will result in the following file structure:
```
piveau-x/
├── piveau-profiles/
├── possible-x-did-web-service/
├── piveau-hub-ui/
├── possible-x-piveau-ui/
├── .gitignore
├── .gitmodules
├── docker-compose.yml
└── README.md
```

## Configuration

After cloning the repository, you need to configure several components to ensure proper functioning of the piveau-X platform. Each component requires specific settings as detailed in the following sections.

### DID



### Signing Service

The Signing Service must be configured with the private key associated with the DID just created. As shown below, set the private key as the `FLASK_PRIVATE_KEY` environment variable in the `docker-compose.yml` file.

```yaml
possible-x-signing-service:
  build:
    context: ./possible-x-signing-service
    dockerfile: Dockerfile
  container_name: possible-x-signing-service
  logging:
    options:
      max-size: "50m"
  ports:
    - "2020:2020"
  environment:
    # Configure this environment variable with your private key
    - FLASK_PRIVATE_KEY=${FLASK_PRIVATE_KEY}  # ← Set this value in your environment
```

### piveau-hub-repo

piveau-hub-repo must be configured to enable piveau Profiles, which allow you to customize the metadata model of the piveau instance. In piveau-X, piveau Profiles allow specific resource SHACL files (i.e., `service-offering-shape.shacl`, `data-product-shape.shacl`, `legal-participant-shape.shacl`) to be imported and used in piveau. To do so, the following environment variables must be set:
- `PIVEAU_FEATURE_FLAGS`: Must be set to enable `piveau_profile`.
- `PIVEAU_PROFILE`: Must be set to specify the absolute filepath of the shacl files. Note that these `service-offering-shape.shacl`, `data-product-shape.shacl`, and `legal-participant-shape.shacl` files are located in the `piveau-profiles` folder.

Secondly, piveau-hub-repo must be configured to enable piveau Trust, which enables piveau-X specific endpoints relating to signing, verifying, and storing Verifiable Credentials (VC) associated with these resources. Notably, these endpoints send these VCs to the Gaia-X Digital Clearing House (GXDCH) and stores the corresponding compliance VCs. To configure these features, the following environment variables must be set:
- `PIVEAU_FEATURE_FLAGS`: Must be set to enable `piveau_trust`.
- `PIVEAU_TRUST`: Must be set to specify the DID created and the address of the signing service.

```yaml
piveau-hub-repo:
  image: dockerhub.fokus.fraunhofer.de:5000/piveau/hub/piveau-hub-repo:latest
  logging:
    options:
      max-size: "50m"
  ports:
    - 8081:8080
    - 8085:8085
    - 5002:5000
  environment:
    - PIVEAU_HUB_API_KEY=yourRepoApiKey
    - PIVEAU_HUB_SHELL_CONFIG={"http":{},"telnet":{}}
    - PIVEAU_HUB_VALIDATOR={"enabled":true,"metricsPipeName":"metrics","history":false}
    - PIVEAU_HUB_SEARCH_SERVICE={"enabled":true,"url":"piveau-hub-search","port":8080,"api_key":"yourSearchApiKey"}
    # Enable piveau_profile and piveau_trust features
    - PIVEAU_FEATURE_FLAGS={"piveau_profile":true,"piveau_trust":true}
    # Configure the path to your SHACL profile files
    - PIVEAU_PROFILE={"type":"directory","path":"/path/to/my/profile/my-profile"}
    # Configure with your organization's DID and signing service address
    - PIVEAU_TRIPLESTORE_CONFIG={"address":"http://virtuoso:8890","clearGeoDataCatalogues":["*"]}
    - PIVEAU_TRUST_CONFIG={"did":"<Organization's did>","addressSignService":"http://localhost:2020"}
    - JAVA_OPTS=-Xms1g -Xmx2g
  volumes:
    - ./pipes:/usr/verticles/pipes
```

### piveau-hub-search

piveau-hub-search must also be configured to enable piveau Profiles. To do so, the following environment variables must be set:
- `PIVEAU_FEATURE_FLAGS`: Must be set to enable `piveau_profile`.
- `PIVEAU_PROFILE`: Must be set to specify the absolute filepath of the shacl files, which are located in the `piveau-profiles` folder.

```yaml
piveau-hub-search:
image: registry.gitlab.com/piveau/hub/piveau-hub-search:5.0.3
container_name: piveau-hub-search
logging:
    options:
    max-size: "50m"
ports:
    - 8084:8080
    - 8086:8081
depends_on:
    elasticsearch:
    condition: service_healthy
environment:
    - PIVEAU_HUB_SEARCH_API_KEY=yourSearchApiKey
    - PIVEAU_HUB_SEARCH_ES_CONFIG={"host":"elasticsearch","port":9200}
    - PIVEAU_HUB_SEARCH_GAZETTEER_CONFIG={"url":"http://doesnotmatter.eu"}
    - PIVEAU_FEATURE_FLAGS={"piveau_profile":true}
    - PIVEAU_PROFILE={"type":"directory","path":"/path/to/my/profile/my-profile"}
    - JAVA_OPTS=-Xms1g -Xmx2g
```

## Running the Project

After configuring all the necessary components as described in the previous sections, you can start the entire piveau-X platform using Docker Compose:

```bash
# Navigate to the piveau-x directory
cd piveau-x

# Start all services defined in docker-compose.yml
docker-compose up -d
```

You can check the status of all running containers with:

```bash
docker-compose ps
```

To view logs from all services or a specific service:

```bash
# View logs from all services
docker-compose logs

# View logs from a specific service (e.g., the signing service)
docker-compose logs possible-x-signing-service
```

To stop all services:

```bash
docker-compose down
```

Once all services are running, you can access:
- The piveau-X UI at http://localhost:8080
- The API documentation at http://localhost:8081/api

## Usage

Once the platform is running, you can interact with it through both the RESTful API and the web-based user interface. The following subsections detail the specific operations available for resource publication and discovery.

### Resource Publication

piveau-X provides RESTful API endpoints for managing resources and associated credentials:

#### Publish a Resource with Gaia-X Compliance Check

- **PUT `/trust/{type}`**: Adds a resource after verifying its compliance via Gaia-X standards. The resource and signed representation are stored upon successful validation.
  - **Parameters:**
    - `type` *(path, required)*: Resource type (e.g., `service-offering`, `legal-participant`).
    - `verificationMethod` *(query, required)*: URL-encoded verification method used for credential verification.

#### Retrieve Resource

- **GET `/trust/{type}/{id}`**: Retrieves the signed representation for a specified resource.
  - **Parameters:**
    - `id` *(path, required)*: ID of the resource.
    - `type` *(path, required)*: Resource type.
    - `showCompliance` *(query, optional)*: Boolean indicating whether to retrieve compliance information (`default: false`).

#### Retrieve a Verifiable Credential or Compliance Credential

- **GET `/trust/credentials/{type}/{id}`**: Fetches either a Verifiable Credential or a Compliance Credential for a specific resource.
  - **Parameters:**
    - `id` *(path, required)*: ID of the resource.
    - `type` *(path, required)*: Resource type (e.g., `service-offering`, `legal-participant`).
    - `showCompliance` *(query, optional)*: Boolean indicating whether to retrieve compliance credential (`default: false`).

These endpoints allow the publication and discovery of Gaia-X compliant resources in the piveau-x catalogue.

### Resource Discovery

The piveau-X platform provides a user-friendly UI to discover and explore Gaia-X compliant resources. The UI is accessible at http://localhost:8080 after starting the platform.

#### Browsing Resources

The UI offers several ways to discover resources:

- **Home Page**: Provides an overview of available resources with key statistics and featured items.
- **Resource Pages**: Lists all published resources with filtering options by resource type (Service Offerings, Data Service Offering, Legal Participants).
- **Search Functionality**: Allows users to search for specific resources using keywords, filters, and advanced search options.

#### Viewing Resource Details

When viewing a specific resource, the UI displays:

1. **Basic Information**: Name, description, and other core metadata of the resource.
2. **Verifiable Credentials**: Access to view the associated Verifiable Credentials (VCs).
3. **Compliance Verifiable Credentials**: Visual indicators showing the Gaia-X Verifiable Credential associated with the resource.

The UI makes it easy to distinguish between compliant and non-compliant resources, providing transparency and trust in the published resources.

