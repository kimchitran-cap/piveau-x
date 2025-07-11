<template>
  <div class="app">
    <div class="app-snackbar position-fixed fixed-bottom m-3 m-md-5 py-5 d-flex justify-content-center w-100">
      <app-snackbar />
    </div>
    <vue-progress-bar />
    <div class="site-wrapper">
      <piveau-header
        :enable-authentication="authEnabled"
        :authenticated="isAuthenticated"
        @login="login"
        @logout="logout"
      />

      <router-view
          class="content"
          :key="`${$route.fullPath}`"
      />
      <piveau-footer
        :enable-authentication="authEnabled"
        :authenticated="isAuthenticated"
        @login="login"
        @logout="logout"
      >
      </piveau-footer>
    </div>
    <dpi-menu v-if="isAuthenticated"></dpi-menu>
  </div>

</template>

<script>
/* eslint-disable no-underscore-dangle */
import { mapGetters, mapActions } from 'vuex';
import { isNumber } from 'lodash';
import {
  DpiMenu,
  usePiwikSuspendFilter,
  head,
} from '@piveau/piveau-hub-ui-modules';

export default {
  name: 'app',
  components: {
    DpiMenu,
  },
  mixins: [
    usePiwikSuspendFilter,
  ],
  data() {
    return {
      tracker: null,
      matomoURL: this.$env.tracker.trackerUrl,
      piwikId: this.$env.tracker.siteId,
      lastRoute: null,
      keycloak: this.$keycloak,
      showSparql: this.$env.routing.navigation.showSparql,
    };
  },
  computed: {
    ...mapGetters('auth', [
      'securityAuth',
      'getRTPToken',
      'getKeycloak',
    ]),
    authEnabled() {
      return this.$env?.authentication?.useService && this.$env.authentication?.login?.useLogin;
    },
    isAuthenticated() {
      return this.authEnabled && this.keycloak?.authenticated;
    },
  },
  methods: {
    ...mapActions('auth', [
      'authLogin',
      'authLogout',
      'rtpToken',
      'setKeycloak',
    ]),
    resume() {
      if (typeof this.$piwik?.resume === "function") this.$piwik.resume();
    },
    isNumber,
    login() {
      this.$keycloak.loginFn();
    },
    logout() {
      this.$keycloak.logoutFn();
    },
    handleFollowClick(url) {
      if (typeof this.$piwik?.resume === "function") this.$piwik.trackOutlink(url);
    },
  },
  setup() {
    const { useRootHead } = head;
    useRootHead();
  }
};
</script>

<style lang="scss">
// Normalizes default css rules. See: https://github.com/necolas/normalize.css
@import './styles/utils/normalize.css';

// @font-face {
//   font-family: "Ubuntu";
//   src: local("Ubuntu"), url(../public/static/fonts/Ubuntu/Ubuntu-Regular.ttf) format("truetype");
// }

// Hides 'editorial content' tab.
// todo: remove this when it is configurable in modules.
#myTab > div.d-flex.cursor-pointer > li:nth-child(3) > a {
  display: none;
}

* {
  box-sizing: border-box;
}

.site-wrapper header {
  display: initial;
}

.container-fluid {
  max-width: 1340px !important;
}
</style>

<style lang="scss" scoped>

.app {
  background-color: #fff;
}

.site-wrapper {
  border: 0;
  max-width: none;
  box-shadow: none;
  display: initial;

  .content {
    padding: 30px 30px 0 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
  }
}

.app-snackbar {
  z-index: 9999;
  pointer-events: none;
}
</style>
