<template>
  <v-row
    align="center"
    justify="center"
    class="mx-0"
  >
    <v-col
      cols="12"
      sm="10"
      md="10"
      lg="10"
      xl="10"
    >
      <v-card flat class="text-center">
        <h1>
          <span class="white--text px-3 red darken-3">مباشر</span>
          احصائيات كورنا في العالم
        </h1>
      </v-card>
    </v-col>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      xs="6"
      sm="6"
      md="4"
      lg="5"
      xl="5"
    >
      <v-card
        class="elevation-12"
        :color="item.color"
        dark
      >
        <div
          class="text-center"
        >
          <v-card-title
            class="headers d-block my-3"
            style="
                  word-break: normal !important;
                  font-size: 25px;
                "
            v-text="item.title"
          />

          <v-card-subtitle
            style="
                  font-size: 25px;
                  font-weight: 600;
                  line-height: 1.375rem;
                  letter-spacing: 2px;
                "
          >
            {{ item.number }}
          </v-card-subtitle>
        </div>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="10"
      md="10"
      lg="10"
      xl="10"
      class="px-0"
    >
      <v-card
        id="table"
      >
        <v-card-title>
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="بحث "
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :items-per-page="-1"
          :headers="headers"
          :items="countries"
          :search="search"
          :mobile-breakpoint="NaN"
          :dense="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs'"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
/* eslint-disable dot-notation */
export default {
  async asyncData ({ app, store }) {
    const { data } = await app.$api_mo.get('worldstat.php')
    const totals = data
    await store.dispatch('add_affected_countries', app)
    return {
      items: [
        {
          color: '#1F7087',
          title: 'اجمالي الاصابات',
          number: totals.total_cases
        },
        {
          color: '#3a282c',
          title: 'اجمالي الوفيات',
          number: totals.total_deaths
        },
        {
          color: '#328210',
          title: 'حالات التعافي',
          number: totals.total_recovered
        },
        {
          color: '#823167',
          title: 'الوفيات اليوم',
          number: totals.new_deaths
        }
      ]

    }
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'البلد',
          align: 'center',
          sortable: false,
          value: 'country_name_ar'
        },
        { text: 'اجمالي الاصابات', value: 'cases' },
        { text: 'الوفيات', value: 'deaths' },
        { text: 'حالات التعافي', value: 'total_recovered' }
        // { text: 'الاصابات الخطرة', value: 'serious_critical' }
      ]
    }
  },
  computed: {
    ...mapGetters(['countries'])

  },
  head () {
    return {
      title: 'احصائيات واعداد الاصابات بفيروس كورونا في العالم | مباشر',
      meta: [
        { name: 'og:title', content: 'احصائيات واعداد الاصابات بفيروس كورونا في العالم - مباشر' },
        { name: 'og:description', content: 'أعداد المصابين الكلي وأعداد المتعافين وأعداد الوفيات بالاضافة لاعداد المصابين وحالتهم سيئة في جميع أنحاء العالم' },
        { name: 'og:image', content: 'https://i.ibb.co/wrxXXfC/totals.jpg' }

      ]
    }
  }

}
</script>

<style lang='scss'>
#table{
  max-width: 100%;
  margin: 0px auto;
  table{
  width: 90% !important;
  margin: 0px auto;
  }
  .v-data-footer{
    padding: 0px;
    padding-left: 4px;
    margin: 0px auto;
    margin-left: 10px;
    .v-data-footer__pagination{
      margin-left: 5px;
    }
    button{
      margin: 0px;
      width: 25px;
    }
  }
}
table{
  th {
    background-color: rgb(24, 58, 38) !important;
    color: rgb(248, 245, 245) !important;
    font-weight: 400 !important;
    font-size: 17px !important;
    text-align: center !important;
  }

  td{
    font-size: 16px !important ;
    text-align: center !important;
  }

  tr:nth-child(odd){
    background-color: #F2F2F2;
  }
  tr {
    td{
      font-weight: bolder;
    }
    td:nth-child(1){
      color: rgb(51, 19, 8);
    }
    td:nth-child(4){
      color: green;
    }
    td:nth-child(3){
      color: rgb(126, 4, 4);
    }
  }
}
</style>
