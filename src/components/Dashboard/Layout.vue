<template>
  <div>
    <Sidebar />
    <Body />
  </div>
</template>

<script>
import Sidebar from "@/components/Dashboard/Partials/Sidebar";
import Body from "@/components/Dashboard/Partials/Body";


export default {
  components: {
    Sidebar,
    Body
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