<template>
  <div>
    <PageHeader  :activeTab="activeTab" @setTab="(value) => onSetTab(value)"/>
    <ListArticles />

     
    <PageRules v-if="activeTab === 'rules'" />
    <PageContacts  v-else-if="activeTab === 'contacts'" />
    <PageHome v-else />
  </div>
   
</template>

<script >
import PageHeader from "@/components/PageHeader.vue";
import ListArticles from "@/components/ListArticles.vue";
import PageHome from "@/components/page/PageHome.vue";
import PageRules from "@/components/page/PageRules.vue";
import PageContacts from "@/components/page/PageContacts.vue";

  export default {
    components: {
      PageHeader,
      ListArticles,
      PageHome,
      PageRules,
      PageContacts,
    },
     data() {
      return {
        activeTab: "home",
      };
    },
    methods: {
      onSetTab(value) {
        this.activeTab = value;
      },
    },
  };

  </script>



<style lang="less"> 

</style>
