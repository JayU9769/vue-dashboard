<template>
  <!-- Topnav -->
  <nav class="navbar navbar-top navbar-expand navbar-dark border-bottom">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Search form -->
        <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Search" type="text">
            </div>
          </div>
          <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </form>
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center  ml-md-auto ">
          <li class="nav-item d-xl-none">
            <!-- Sidenav toggler -->
            <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </div>
          </li>
          <li class="nav-item d-sm-none">
            <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
              <i class="ni ni-zoom-split-in"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <span class="nav-link" @mouseenter="notificationPanel = true" @mouseleave="notificationPanel = false" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="ni ni-bell-55 text-primary"></i>
            </span>
            <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right  py-0 overflow-hidden" @mouseenter="notificationPanel = true" @mouseleave="notificationPanel = false"  :class="notificationPanel ? 'show' : ''">
              <!-- Dropdown header -->
              <div class="px-3 py-3">
                <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
              </div>
              <!-- List group -->
              <div class="list-group list-group-flush">
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/theme/team-1.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>2 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                    </div>
                  </div>
                </a>
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/theme/team-2.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>3 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                    </div>
                  </div>
                </a>
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/theme/team-3.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>5 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                    </div>
                  </div>
                </a>
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/theme/team-4.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>2 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                    </div>
                  </div>
                </a>
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img alt="Image placeholder" src="@/assets/img/theme/team-5.jpg" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">John Snow</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>3 hrs ago</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                    </div>
                  </div>
                </a>
              </div>
              <!-- View all -->
              <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
          <li class="nav-item dropdown" id="top-navbar">
            <b-dropdown size="lg" class="pr-0" variant="link" toggle-class="text-decoration-none" no-caret>
              <template v-slot:button-content>
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="@/assets/img/theme/team-4.jpg">
                  </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold ">John Snow</span>
                  </div>
                </div>
              </template>
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <b-dropdown-item href="#">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ni ni-support-16"></i>
                <span>Support</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    notificationPanel: false
  }),
  mounted() {
    this.init();
  },
  methods: {
    init: function () {

    }
  }
}
</script>