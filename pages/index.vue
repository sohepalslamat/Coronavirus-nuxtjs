<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="11"
      sm="10"
      md="7"
      lg="7"
      xl="7"
    >
      <v-card flat class="text-center">
        <h1>احصائيات كورنا في العالم مباشر </h1>
      </v-card>
    </v-col>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="11"
      sm="10"
      md="7"
      lg="7"
      xl="7"
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
            class="headers d-inline-block my-3"
            style="
                  font-size: 25px;
                  letter-spacing: 1px;
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
            v-text="item.number"
          />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const { data } = await app.$https.get('totals')
    const totals = data[0]
    return {
      items: [
        {
          color: '#1F7087',
          title: 'عدد الاصابات الكلي',
          number: totals.confirmed
        },
        {
          color: '#952175',
          title: 'عدد المصابين حالتهم حرجة',
          number: totals.critical
        },
        {
          color: '#385F73',
          title: 'عدد الحالات التي تماثلت للشفاء',
          number: totals.recovered
        },
        {
          color: '#DC143C',
          title: 'عدد الوفيات',
          number: totals.deaths
        }

      ]

    }
  },
  head () {
    return {
      title: 'احصائيات وأعداد',
      meta: [
        { name: 'og:title', content: 'احصائيات واعداد الاصابات بفايروس كورونا في العالم - مباشر' },
        { name: 'og:description', content: 'أعداد المصابين الكلي وأعداد المتعافين وأعداد الوفيات بالاضافة لاعداد المصابين وحالتهم سيئة في جميع أنحاء العالم' },
        { name: 'og:image', content: 'https://i.ibb.co/wrxXXfC/totals.jpg' }

      ]
    }
  }

}
</script>

<style>

</style>
