

<template>
  <div id="piveau-footer" class="p-0 pt-5 d-flex">

    <div class="w-33">
      <img src="@/assets/img/capgemini_white.png" width="190" class="ml-4">
    </div>

    <div class="w-33">
      <h4>Capgemini Demo Data Space Catalogue</h4>
      <div>© 2025 Capgemini</div>
    </div>

    <div class="w-33">
      <h4>Information</h4>
      <ul>
        <li class="mb-2">
          <router-link to="/imprint">Impressum</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PiveauFooter',
  inheritAttrs: false,
  props: {},
  data() {
    return { }
  }
};
</script>

<style lang="scss">
@import '../styles/custom_theme.scss';

#piveau-footer {
  margin-top: 60px;
  padding: 60px 0 160px 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #FFF;
  text-align: left;
  background: $primary;
  background-color: $primary;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
  }

}

.w-33 {
  min-width: 33%;
}

/***********************************
	LAYOUT & TYPOGRAPHY
***********************************/

#piveau-footer .container {
  max-width: 1340px !important;
}

#piveau-footer *:not(.far):not(.fas):not(.fab) {
  font-family: Helvetica, Arial, sans-serif;
}

/***********************************
	TOP FOOTER
***********************************/
#piveau-footer #footer_first {
  background: $secondary-blue;
  padding-top: 35px;
  padding-bottom: 20px;
}

#piveau-footer #footer_first .region-footer-first-left,
#piveau-footer #footer_first .region-footer-first-middle,
#piveau-footer #footer_first .region-footer-first-right {
  padding-bottom: 25px;
}

#piveau-footer #footer_first {
  font-size: 1em;
  font-weight: normal;
  color: $primary;
}

#piveau-footer .btn.btn-footer {
  background-color: $primary;
  border-color: $primary;
}

#piveau-footer .btn.btn-footer:hover {
  background-color: #196fd2;
  border-color: #196fd2;
}

/***********************************
BOTTOM SITE BRANDING
***********************************/
#piveau-footer #footer_first #block-sitebranding {
  margin-bottom: 25px;
}

#piveau-footer #footer_first #block-sitebranding .site-branding__text a {
  line-height: 60px;
  font-size: 20px;
  color: #0F62AE;
  text-transform: uppercase;
  font-weight: 300;
}

#piveau-footer #footer_first #block-edp3-branding .site-branding__text a strong {
  font-weight: bold;
}

/***********************************
FUNDED BY NOTICE
***********************************/
#piveau-footer #footer_first #block-fundedby img.fundedby {
  height: 40px;
  width: 60px;
  float: none;
  margin-right: 10px;
}

#piveau-footer #footer_first #block-fundedby p {
  margin: 0;
  line-height: 40px;
  font-size: 14px;
  color: $primary;
}


/***********************************
	HELP US IMPROVE
***********************************/
#piveau-footer #footer_first #block-helpusimprove {
  margin-top: 25px;
  margin-bottom: 15px;
}

#piveau-footer #footer_first #block-helpusimprove p {
  line-height: 20px;
}

#piveau-footer #footer_first #block-helpusimprove p a {
  color: $primary;
  font-size: 14px;
}

/***********************************
FOLLOW US
***********************************/
#piveau-footer #footer_first #block-followuson ul {
  margin: 25px 0 0 0;
  padding: 0;
}

#piveau-footer #footer_first #block-followuson ul li {
  list-style-type: none;
  overflow: hidden;
}

#piveau-footer #footer_first #block-followuson ul li a {
  color: $primary;
  line-height: 20px;
  display: inline-block;
  margin-bottom: 11px;
  position: relative;
}

#piveau-footer #footer_first #block-followuson ul li a:hover {
  color: #196fd2;
  text-decoration: none;
}

#piveau-footer #footer_first #block-followuson ul li a:before {
  font-family: "Font Awesome 5 Brands";
  font-weight: 900;
  margin-right: 10px;
  font-size: 30px;
  position: relative;
  top: 5px;
}

/***********************************
RESPONSIVE
***********************************/
@media screen and (min-width: 768px) and (max-width:1090px) {
  #piveau-footer #footer_first #block-sitebranding .site-branding__text a {
    line-height: 1;
    width: 150px;
    padding-top: 13px;
    padding-left: 5px;
    display: inline-block;
  }

  #piveau-footer #footer_first #block-fundedby p:nth-child(2) {
    line-height: 1;
    width: 180px;
    padding-top: 5px;
  }
}

@media screen and (max-width: 715px) {
  #piveau-footer #footer_first #block-sitebranding .site-branding__text a {
    line-height: 1;
    width: 150px;
    padding-top: 13px;
    padding-left: 5px;
    display: inline-block;
  }
}
</style>
