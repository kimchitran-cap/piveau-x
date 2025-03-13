/**
 * Configuration template file to bind specific properties from user-config.js to environment variables.
 *
 * This object MUST be structurally identical to the standard user-config.sample.js file.
 * Each value MUST start with the $VITE_ prefix and SHOULD be followed by their path, e.g.
 *
 * api: { baseUrl: '$VITE_API_BASE_URL' }
 *
 * Their corresponding environment variable keys MUST equal that value without the $ character, e.g.
 *
 * VITE_API_BASE_URL: '/base'
 */

export default {
  "api": {
    "baseUrl": "$VITE_API_BASE_URL",
    "hubUrl": "$VITE_API_HUB_URL",
    "qualityBaseUrl": "$VITE_API_QUALITY_BASE_URL",
    "similarityBaseUrl": "$VITE_API_SIMILARITY_BASE_URL",
    "similarityEndpoint": "$VITE_API_SIMILARITY_ENDPOINT",
    "fileUploadUrl": "$VITE_API_FILE_UPLOAD_URL",
    "sparqlUrl": "$VITE_API_SPARQL_URL",
    "gazetteerBaseUrl": "$VITE_API_GAZETTEER_BASE_URL",
    "catalogBaseUrl": "$VITE_API_CATALOG_BASE_URL",
    "corsproxyApiUrl": "$VITE_API_CORSPROXY_API_URL"
  },
  "authentication": {
    "useService": "$VITE_AUTHENTICATION_USE_SERVICE",
    "login": {
      "useLogin": "$VITE_AUTHENTICATION_LOGIN_USE_LOGIN",
      "loginTitle": "$VITE_AUTHENTICATION_LOGIN_LOGIN_TITLE",
      "loginURL": "$VITE_AUTHENTICATION_LOGIN_LOGIN_URL",
      "loginRedirectUri": "$VITE_AUTHENTICATION_LOGIN_LOGIN_REDIRECT_URI",
      "logoutTitle": "$VITE_AUTHENTICATION_LOGIN_LOGOUT_TITLE",
      "logoutURL": "$VITE_AUTHENTICATION_LOGIN_LOGOUT_URL",
      "logoutRedirectUri": "$VITE_AUTHENTICATION_LOGIN_LOGOUT_REDIRECT_URI"
    },
    "keycloak": {
      "realm": "$VITE_AUTHENTICATION_KEYCLOAK_REALM",
      "url": "$VITE_AUTHENTICATION_KEYCLOAK_URL",
      "clientId": "$VITE_AUTHENTICATION_KEYCLOAK_CLIENT_ID",
      "ssl-required": "$VITE_AUTHENTICATION_KEYCLOAK_SSL_REQUIRED",
      "public-client": "$VITE_AUTHENTICATION_KEYCLOAK_PUBLIC_CLIENT",
      "verify-token-audience": "$VITE_AUTHENTICATION_KEYCLOAK_VERIFY_TOKEN_AUDIENCE",
      "use-resource-role-mappings": "$VITE_AUTHENTICATION_KEYCLOAK_USE_RESOURCE_ROLE_MAPPINGS",
      "confidential-port": "$VITE_AUTHENTICATION_KEYCLOAK_CONFIDENTIAL_PORT"
    },
    "keycloakInit": {
      "pkceMethod": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_PKCE_METHOD",
      "useNone": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_USE_NONE",
      "adapter": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_ADAPTER",
      "onLoad": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_ON_LOAD",
      "token": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_TOKEN",
      "refreshToken": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_REFRESH_TOKEN",
      "idToken": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_ID_TOKEN",
      "timeSkew": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_TIME_SKEW",
      "checkLoginIframe": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_CHECK_LOGIN_IFRAME",
      "checkLoginIframeInterval": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_CHECK_LOGIN_IFRAME_INTERVAL",
      "responseMode": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_RESPONSE_MODE",
      "flow": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_FLOW",
      "scope": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_SCOPE",
      "redirectUri": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_REDIRECT_URI",
      "silentCheckSsoRedirectUri": "$VITE_AUTHENTICATION_KEYCLOAK_INIT_SILENT_CHECK_SSO_REDIRECT_URI"
    },
    "rtp": {
      "grand_type": "$VITE_AUTHENTICATION_RTP_GRAND_TYPE",
      "audience": "$VITE_AUTHENTICATION_RTP_AUDIENCE"
    },
    "authToken": "$VITE_AUTHENTICATION_AUTH_TOKEN",
    "authMiddleware": {
      "enable": "$VITE_AUTHENTICATION_AUTH_MIDDLEWARE_ENABLE",
      "baseUrl": "$VITE_AUTHENTICATION_AUTH_MIDDLEWARE_BASE_URL",
      "loginRedirectUrl": "$VITE_AUTHENTICATION_AUTH_MIDDLEWARE_LOGIN_REDIRECT_URL",
      "logoutRedirectUrl": "$VITE_AUTHENTICATION_AUTH_MIDDLEWARE_LOGOUT_REDIRECT_URL"
    }
  },
  "routing": {
    "routerOptions": {
      "base": "$VITE_ROUTING_ROUTER_OPTIONS_BASE",
      "mode": "$VITE_ROUTING_ROUTER_OPTIONS_MODE"
    },
    "navigation": {
      "defaultNavigationItems": "$VITE_ROUTING_NAVIGATION_DEFAULT_NAVIGATION_ITEMS"
    },
    "pagination": {
      "usePagination": "$VITE_ROUTING_PAGINATION_USE_PAGINATION",
      "usePaginationArrows": "$VITE_ROUTING_PAGINATION_USE_PAGINATION_ARROWS",
      "useItemsPerPage": "$VITE_ROUTING_PAGINATION_USE_ITEMS_PER_PAGE",
      "defaultItemsPerPage": "$VITE_ROUTING_PAGINATION_DEFAULT_ITEMS_PER_PAGE",
      "defaultItemsPerPageOptions": "$VITE_ROUTING_PAGINATION_DEFAULT_ITEMS_PER_PAGE_OPTIONS"
    }
  },
  "metadata": {
    "title": "$VITE_METADATA_TITLE",
    "description": "$VITE_METADATA_DESCRIPTION",
    "keywords": "$VITE_METADATA_KEYWORDS"
  },
  "content": {
    "resources": {
      "resourceMapping": "$VITE_CONTENT_RESOURCES_RESOURCE_MAPPING",
      "search": {
        "useSearch": "$VITE_CONTENT_RESOURCES_SEARCH_USE_SEARCH",
      },
      "limit": {
        "defaultLimit": "$VITE_CONTENT_RESOURCES_LIMIT_DEFAULT_LIMIT",
      },
      "page": {
        "usePagination": "$VITE_CONTENT_RESOURCES_PAGE_USE_PAGINATION",
      },
      "sort": {
        "useSort": "$VITE_CONTENT_RESOURCES_SORT_USE_SORT",
        "defaultSort": "$VITE_CONTENT_RESOURCES_SORT_DEFAULT_SORT",
      },
      "facets": {
        "useResourceFacets": "$VITE_CONTENT_RESOURCES_FACETS_USE_RESOURCE_FACETS",
        "excludedFacets": "$VITE_CONTENT_RESOURCES_FACETS_EXCLUDED_FACETS",
        "facetOrder": "$VITE_CONTENT_RESOURCES_FACETS_FACET_ORDER",
      },
    },
    "resourceDetails": {
      "customResources": "$VITE_CONTENT_RESOURCE_DETAILS_CUSTOM_RESOURCES",
    },
    "datasets": {
      "useSort": "$VITE_CONTENT_DATASETS_USE_SORT",
      "useFeed": "$VITE_CONTENT_DATASETS_USE_FEED",
      "useCatalogs": "$VITE_CONTENT_DATASETS_USE_CATALOGS",
      "followKeywordLinks": "$VITE_CONTENT_DATASETS_FOLLOW_KEYWORD_LINKS",
      "maxKeywordLength": "$VITE_CONTENT_DATASETS_MAX_KEYWORD_LENGTH",
      "facets": {
        "useDatasetFacets": "$VITE_CONTENT_DATASETS_FACETS_USE_DATASET_FACETS",
        "useDatasetFacetsMap": "$VITE_CONTENT_DATASETS_FACETS_USE_DATASET_FACETS_MAP",
        "showClearButton": "$VITE_CONTENT_DATASETS_FACETS_SHOW_CLEAR_BUTTON",
        "showFacetsTitle": "$VITE_CONTENT_DATASETS_FACETS_SHOW_FACETS_TITLE",
        "cutoff": "$VITE_CONTENT_DATASETS_FACETS_CUTOFF",
        "MIN_FACET_LIMIT": "$VITE_CONTENT_DATASETS_FACETS_MIN__FACET__LIMIT",
        "MAX_FACET_LIMIT": "$VITE_CONTENT_DATASETS_FACETS_MAX__FACET__LIMIT",
        "FACET_OPERATORS": {
          "or": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_OR",
          "and": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_AND"
        },
        "FACET_GROUP_OPERATORS": {
          "or": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_OR",
          "and": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_AND"
        },
        "defaultFacetOrder": "$VITE_CONTENT_DATASETS_FACETS_DEFAULT_FACET_ORDER",
        "scoringFacets": {
          "useScoringFacets": "$VITE_CONTENT_DATASETS_FACETS_SCORING_FACETS_USE_SCORING_FACETS",
          "defaultScoringFacets": "$VITE_CONTENT_DATASETS_FACETS_SCORING_FACETS_DEFAULT_SCORING_FACETS"
        }
      }
    },
    "catalogs": {
      "useSort": "$VITE_CONTENT_CATALOGS_USE_SORT",
      "useCatalogCountries": "$VITE_CONTENT_CATALOGS_USE_CATALOG_COUNTRIES",
      "defaultCatalogImagePath": "$VITE_CONTENT_CATALOGS_DEFAULT_CATALOG_IMAGE_PATH",
      "defaultCatalogCountryID": "$VITE_CONTENT_CATALOGS_DEFAULT_CATALOG_COUNTRY_ID",
      "defaultCatalogID": "$VITE_CONTENT_CATALOGS_DEFAULT_CATALOG_ID",
      "facets": {
        "useCatalogFacets": "$VITE_CONTENT_CATALOGS_FACETS_USE_CATALOG_FACETS",
        "showClearButton": "$VITE_CONTENT_CATALOGS_FACETS_SHOW_CLEAR_BUTTON",
        "showFacetsTitle": "$VITE_CONTENT_CATALOGS_FACETS_SHOW_FACETS_TITLE",
        "cutoff": "$VITE_CONTENT_CATALOGS_FACETS_CUTOFF",
        "MIN_FACET_LIMIT": "$VITE_CONTENT_CATALOGS_FACETS_MIN__FACET__LIMIT",
        "MAX_FACET_LIMIT": "$VITE_CONTENT_CATALOGS_FACETS_MAX__FACET__LIMIT",
        "FACET_OPERATORS": {
          "or": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_OR",
          "and": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_AND"
        },
        "FACET_GROUP_OPERATORS": {
          "or": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_OR",
          "and": "$VITE_CONTENT_CATALOGS_FACETS_FACET__GROUP__OPERATORS_AND"
        },
        "defaultFacetOrder": "$VITE_CONTENT_CATALOGS_FACETS_DEFAULT_FACET_ORDER",
        "useDatasetFacetsMap": "$VITE_CONTENT_CATALOGS_FACETS_USE_DATASET_FACETS_MAP"
      }
    },
    "datasetDetails": {
      "properties": "$VITE_CONTENT_DATASET_DETAILS_PROPERTIES",
      "embed": {
        "enable": "$VITE_CONTENT_DATASET_DETAILS_EMBED_ENABLE",
        "defaultWidth": "$VITE_CONTENT_DATASET_DETAILS_EMBED_DEFAULT_WIDTH",
        "defaultHeight": "$VITE_CONTENT_DATASET_DETAILS_EMBED_DEFAULT_HEIGHT",
        "minRange": "$VITE_CONTENT_DATASET_DETAILS_EMBED_MIN_RANGE",
        "maxRange": "$VITE_CONTENT_DATASET_DETAILS_EMBED_MAX_RANGE"
      },
      "header": {
        "navigation": "$VITE_CONTENT_DATASET_DETAILS_HEADER_NAVIGATION",
        "hidePublisher": "$VITE_CONTENT_DATASET_DETAILS_HEADER_HIDE_PUBLISHER",
        "hideDate": "$VITE_CONTENT_DATASET_DETAILS_HEADER_HIDE_DATE"
      },
      "keywords": {
        "showTitle": "$VITE_CONTENT_DATASET_DETAILS_KEYWORDS_SHOW_TITLE",
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_KEYWORDS_IS_VISIBLE",
        "collapsed": "$VITE_CONTENT_DATASET_DETAILS_KEYWORDS_COLLAPSED"
      },
      "description": {
        "enableMarkdownInterpretation": "$VITE_CONTENT_DATASET_DETAILS_DESCRIPTION_ENABLE_MARKDOWN_INTERPRETATION"
      },
      "distributions": {
        "displayAll": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_DISPLAY_ALL",
        "displayCount": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_DISPLAY_COUNT",
        "incrementSteps": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_INCREMENT_STEPS",
        "descriptionMaxLines": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_DESCRIPTION_MAX_LINES",
        "descriptionMaxChars": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_DESCRIPTION_MAX_CHARS",
        "showValidationButton": "$VITE_CONTENT_DATASET_DETAILS_DISTRIBUTIONS_SHOW_VALIDATION_BUTTON"
      },
      "downloadAs": {
        "enable": "$VITE_CONTENT_DATASET_DETAILS_DOWNLOAD_AS_ENABLE",
        "proxyUrl": "$VITE_CONTENT_DATASET_DETAILS_DOWNLOAD_AS_PROXY_URL",
        "url": "$VITE_CONTENT_DATASET_DETAILS_DOWNLOAD_AS_URL",
        "conversionFormats": "$VITE_CONTENT_DATASET_DETAILS_DOWNLOAD_AS_CONVERSION_FORMATS"
      },
      "similarDatasets": {
        "breakpoints": {
          "verySimilar": {
            "start": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_START",
            "end": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_END"
          },
          "similar": {
            "start": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_START",
            "end": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_END"
          },
          "lessSimilar": {
            "start": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_START",
            "end": "$VITE_CONTENT_DATASET_DETAILS_SIMILAR_DATASETS_BREAKPOINTS_LESS_SIMILAR_END"
          }
        }
      },
      "pages": {
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_IS_VISIBLE",
        "displayAll": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_ALL",
        "displayCount": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_COUNT",
        "incrementSteps": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_INCREMENT_STEPS",
        "descriptionMaxLines": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_LINES",
        "descriptionMaxChars": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_CHARS"
      },
      "visualisations": {
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_IS_VISIBLE",
        "displayAll": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_ALL",
        "displayCount": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_COUNT",
        "incrementSteps": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_INCREMENT_STEPS",
        "descriptionMaxLines": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_LINES",
        "descriptionMaxChars": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_CHARS"
      },
      "dataServices": {
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_IS_VISIBLE",
        "displayAll": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_ALL",
        "displayCount": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DISPLAY_COUNT",
        "incrementSteps": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_INCREMENT_STEPS",
        "descriptionMaxLines": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_LINES",
        "descriptionMaxChars": "$VITE_CONTENT_DATASET_DETAILS_DATA_SERVICES_DESCRIPTION_MAX_CHARS"
      },
      "isUsedBy": {
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_IS_USED_BY_IS_VISIBLE"
      },
      "relatedResources": {
        "isVisible": "$VITE_CONTENT_DATASET_DETAILS_RELATED_RESOURCES_IS_VISIBLE"
      },
      "bulkDownload": {
        "buttonPosition": "$VITE_CONTENT_DATASET_DETAILS_BULK_DOWNLOAD_BUTTON_POSITION",
        "MAX_FILE_TITLE_LENGTH": "$VITE_CONTENT_DATASET_DETAILS_BULK_DOWNLOAD_MAX__FILE__TITLE__LENGTH",
        "MAX_REQUESTS_COUNT": "$VITE_CONTENT_DATASET_DETAILS_BULK_DOWNLOAD_MAX__REQUESTS__COUNT",
        "INTERVAL_MS": "$VITE_CONTENT_DATASET_DETAILS_BULK_DOWNLOAD_INTERVAL__MS",
        "TIMEOUT_MS": "$VITE_CONTENT_DATASET_DETAILS_BULK_DOWNLOAD_TIMEOUT__MS"
      },
      "quality": {
        "displayAll": "$VITE_CONTENT_DATASET_DETAILS_QUALITY_DISPLAY_ALL",
        "numberOfDisplayedQualityDistributions": "$VITE_CONTENT_DATASET_DETAILS_QUALITY_NUMBER_OF_DISPLAYED_QUALITY_DISTRIBUTIONS",
        "csvLinter": {
          "enable": "$VITE_CONTENT_DATASET_DETAILS_QUALITY_CSV_LINTER_ENABLE",
          "displayAll": "$VITE_CONTENT_DATASET_DETAILS_QUALITY_CSV_LINTER_DISPLAY_ALL",
          "numberOfDisplayedValidationResults": "$VITE_CONTENT_DATASET_DETAILS_QUALITY_CSV_LINTER_NUMBER_OF_DISPLAYED_VALIDATION_RESULTS"
        }
      }
    },
    "maps": {
      "mapVisible": "$VITE_CONTENT_MAPS_MAP_VISIBLE",
      "useAnimation": "$VITE_CONTENT_MAPS_USE_ANIMATION",
      "location": "$VITE_CONTENT_MAPS_LOCATION",
      "spatialType": "$VITE_CONTENT_MAPS_SPATIAL_TYPE",
      "height": "$VITE_CONTENT_MAPS_HEIGHT",
      "width": "$VITE_CONTENT_MAPS_WIDTH",
      "mapContainerId": "$VITE_CONTENT_MAPS_MAP_CONTAINER_ID",
      "urlTemplate": "$VITE_CONTENT_MAPS_URL_TEMPLATE",
      "geoBoundsId": "$VITE_CONTENT_MAPS_GEO_BOUNDS_ID",
      "sender": {
        "startBounds": "$VITE_CONTENT_MAPS_SENDER_START_BOUNDS",
        "height": "$VITE_CONTENT_MAPS_SENDER_HEIGHT",
        "width": "$VITE_CONTENT_MAPS_SENDER_WIDTH",
        "mapContainerId": "$VITE_CONTENT_MAPS_SENDER_MAP_CONTAINER_ID"
      },
      "receiver": {
        "startBounds": "$VITE_CONTENT_MAPS_RECEIVER_START_BOUNDS",
        "height": "$VITE_CONTENT_MAPS_RECEIVER_HEIGHT",
        "width": "$VITE_CONTENT_MAPS_RECEIVER_WIDTH",
        "mapContainerId": "$VITE_CONTENT_MAPS_RECEIVER_MAP_CONTAINER_ID",
        "attributionPosition": "$VITE_CONTENT_MAPS_RECEIVER_ATTRIBUTION_POSITION"
      },
      "options": {
        "id": "$VITE_CONTENT_MAPS_OPTIONS_ID",
        "accessToken": "$VITE_CONTENT_MAPS_OPTIONS_ACCESS_TOKEN",
        "attribution": "$VITE_CONTENT_MAPS_OPTIONS_ATTRIBUTION"
      },
      "mapStyle": {
        "color": "$VITE_CONTENT_MAPS_MAP_STYLE_COLOR",
        "fillColor": "$VITE_CONTENT_MAPS_MAP_STYLE_FILL_COLOR",
        "fillOpacity": "$VITE_CONTENT_MAPS_MAP_STYLE_FILL_OPACITY",
        "weight": "$VITE_CONTENT_MAPS_MAP_STYLE_WEIGHT",
        "radius": "$VITE_CONTENT_MAPS_MAP_STYLE_RADIUS"
      }
    },
    "dataProviderInterface": {
      "useService": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_USE_SERVICE",
      "enableFileUploadReplace": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_ENABLE_FILE_UPLOAD_REPLACE",
      "basePath": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_BASE_PATH",
      "specification": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_SPECIFICATION",
      "annifIntegration": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_ANNIF_INTEGRATION",
      "annifLinkTheme": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_ANNIF_LINK_THEME",
      "annifLinkSubject": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_ANNIF_LINK_SUBJECT",
      "buttons": {
        "Dataset": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_BUTTONS_DATASET",
        "Catalogue": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_BUTTONS_CATALOGUE"
      },
      "doiRegistrationService": {
        "persistentIdentifierType": "$VITE_CONTENT_DATA_PROVIDER_INTERFACE_DOI_REGISTRATION_SERVICE_PERSISTENT_IDENTIFIER_TYPE"
      }
    }
  },
  "languages": {
    "useLanguageSelector": "$VITE_LANGUAGES_USE_LANGUAGE_SELECTOR",
    "locale": "$VITE_LANGUAGES_LOCALE",
    "fallbackLocale": "$VITE_LANGUAGES_FALLBACK_LOCALE"
  },
  "themes": {
    "header": "$VITE_THEMES_HEADER"
  },
  "tracker": {
    "isPiwikPro": "$VITE_TRACKER_IS_PIWIK_PRO",
    "siteId": "$VITE_TRACKER_SITE_ID",
    "trackerUrl": "$VITE_TRACKER_TRACKER_URL"
  }
};
