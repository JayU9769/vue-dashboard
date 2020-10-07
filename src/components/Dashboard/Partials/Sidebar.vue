<template>
  <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
       id="sidenav-main"
       @mouseenter="handleMouseIn"
       @mouseleave="handleMouseOut"
  >
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  d-flex  align-items-center">
        <a class="navbar-brand" href="../../../index.html">
          <img src="@/assets/img/brand/dark.svg" height="40" class="navbar-brand-img" alt="...">
        </a>
        <div class=" ml-auto ">
          <!-- Sidenav toggler -->
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" @click="navbar = !navbar" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse " id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav accordion" role="tablist">
            <li class="nav-item">
              <span class="nav-link active" v-b-toggle.navbar-dashboards role="button" data-toggle="collapse" aria-expanded="true" aria-controls="navbar-dashboards">
                <i class="ni ni-shop text-primary"></i>
                <span class="nav-link-text">Dashboards</span>
              </span>
              <b-collapse id="navbar-dashboards" visible accordion="my-accordion" role="tabpanel">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="sidenav-mini-icon"> D </span>
                      <span class="sidenav-normal"> Dashboard </span>
                    </a>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="nav-item">
              <span class="nav-link" v-b-toggle.navbar-examples data-toggle="collapse" aria-expanded="false" aria-controls="navbar-examples">
                <i class="ni ni-ungroup text-orange"></i>
                <span class="nav-link-text">Examples</span>
              </span>
              <b-collapse id="navbar-examples" accordion="my-accordion" role="tabpanel">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/examples/login.html" class="nav-link">
                      <span class="sidenav-mini-icon"> L </span>
                      <span class="sidenav-normal"> Login </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/register.html" class="nav-link">
                      <span class="sidenav-mini-icon"> R </span>
                      <span class="sidenav-normal"> Register </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/profile.html" class="nav-link">
                      <span class="sidenav-mini-icon"> P </span>
                      <span class="sidenav-normal"> Profile </span>
                    </a>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="nav-item">
              <span class="nav-link" data-toggle="collapse" v-b-toggle.navbar-tables role="button" aria-expanded="false" aria-controls="navbar-tables">
                <i class="ni ni-align-left-2 text-default"></i>
                <span class="nav-link-text">Tables</span>
              </span>
              <b-collapse id="navbar-tables" accordion="my-accordion" role="tabpanel">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/tables/tables.html" class="nav-link">
                      <span class="sidenav-mini-icon"> T </span>
                      <span class="sidenav-normal"> Tables </span>
                    </a>
                  </li>
                </ul>
              </b-collapse>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data:()=>({
    navbar: true
  }),
  mounted() {
    this.init();
  },
  methods: {
    init: function () {
      let sideBarMode = localStorage.getItem('sideMode');
      if (sideBarMode === 'small') {
        this.unpinSidenav();
        this.navbar = true;
      } else {
        this.pinSidenav();
        this.navbar = false;
      }
    },
    pinSidenav: function () {
      let $ = window.$;
      $('.sidenav-toggler').addClass('active');
      $('.sidenav-toggler').data('action', 'sidenav-unpin');
      $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
      $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target='+ $('#sidenav-main').data('target') +' />');
    },
    unpinSidenav: function () {
      let $ = window.$;
      $('.sidenav-toggler').removeClass('active');
      $('.sidenav-toggler').data('action', 'sidenav-pin');
      $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
      $('body').find('.backdrop').remove();
    },
    handleMouseIn: function () {
      if (this.navbar)
        window.$('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');

    },
    handleMouseOut: function () {
      if (this.navbar) {
        let $ = window.$;
        $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');
        setTimeout(function() {
          $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
        }, 300);
      }
    }
  },
  watch: {
    navbar(newVal) {
      if (!newVal) {
        localStorage.setItem('sideMode', 'full');
        this.pinSidenav();
      } else {
        localStorage.setItem('sideMode', 'small');
        this.unpinSidenav()
      }
    }
  }
}
</script>