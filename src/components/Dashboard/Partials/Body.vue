<template>
  <div class="main-content" id="panel">
    <div class="sub-main-content">
      <Navbar />
      <!-- Header -->
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-7">
                <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                  <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li class="breadcrumb-item"><a href="#" class="text-primary"><i class="fas fa-home"></i></a></li>
                    <li class="breadcrumb-item"><a href="#" class="text-primary">Dashboards</a></li>
                    <li class="breadcrumb-item active text-primary" aria-current="page">Default</li>
                  </ol>
                </nav>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-sm btn-neutral">New</a>
                <a href="#" class="btn btn-sm btn-neutral">Filters</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Dashboard/Partials/Navbar";
import Footer from "@/components/Dashboard/Partials/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({}),
  mounted() {
    this.init();
  },
  methods: {
    init: function () {

    }
  }
}
</script>