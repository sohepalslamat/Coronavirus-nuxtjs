<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="11"
      sm="10"
      md="6"
      lg="6"
      xl="6"
    >
      <v-card class="elevation-12">
        <v-card
          color="yellow darken-4"
          prominent
          class="pa-2"
        >
          <v-card-text id="title" class="headline brown--text text--darken-4 font-weight-bold text--primary">
            بروتوكل لتحديد حالات الاشتباه بفايروس كورونا من عدمه، إذ يعتمد على استخدام نظام النقاط.<div class="">
              (هذا النموذج مثال معتمد في بعض الدول العربية)
            </div>
          </v-card-text>
        </v-card>
        <v-card-text class="grey lighten-5">
          <v-form>
            <v-switch
              v-for="(item,i) in data "
              :key="i"
              v-model="item.status"
              class="ma-2"
              :color="item.color"
            >
              <template v-slot:label>
                <h3 id="label" class="mx-2 headline" :class="`${item.color}--text`">
                  {{ item.label }}
                </h3>
              </template>
            </v-switch>
          </v-form>
        </v-card-text>
        <div class="pt-4 text-center">
          <v-btn :loading="loading" class="mb-5 px-5" color="primary" @click="checked">
            <span> فحص </span> <v-spacer /> <v-icon large right>
              search
            </v-icon>
          </v-btn>
          <v-btn v-if="newCheck" class="mx-10 mb-5 px-5" color="info" @click="newChecked">
            فحص جديد
          </v-btn>
        </div>
      </v-card>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title id="card" class="pink--text headline">
            نتيجة الفحص
          </v-card-title>
          <hr>
          <v-card-text style="font-size:20px" :class="`${colorResult}--text`" class="mt-6">
            {{ result | resultToStr }}
          </v-card-text>
          <v-card-actions>
            <v-btn x-large color="green darken-1" text @click="newChecked">
              <span>فحص جديد</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  filters: {
    resultToStr (val) {
      if (val <= 4) { return 'التزم بالبيت (عزل ذاتي)' } else if (val === 5) { return 'استشر طبيب هاتفياً' } else if (val >= 6) { return 'راجع المشفى لطلب الاستشارة' }
    }

  },
  data () {
    return {
      loading: false,
      dialog: false,
      result: 0,
      newCheck: false,
      data: [
        { label: 'ارتفاع درجة الحرارة أكثر من 38', status: false, points: 2, color: 'indigo' },
        { label: 'سعال شديد متزايد', status: false, points: 2, color: 'indigo' },
        { label: 'احتقان شديد بالحلق', status: false, points: 1, color: 'primary' },
        { label: 'مرض مزمن: سكري أو ضغط أو أمراض قلبيةأو كلوية ..ألخ', status: false, points: 1, color: 'primary' },
        { label: 'سفر خارج البلد أو احتكاك مع شخص قادم من خارج البلد', status: false, points: 5, color: 'red' },
        { label: 'مخالطة لحالة التهاب تنفسي حاد', status: false, points: 4, color: 'error' },
        { label: 'زيارة مكان صحي ثبت فيه وجود حالة مصابة بالكورونا', status: false, points: 3, color: 'warning' },
        { label: 'أن تكون أحد العاملين بالقطاع الصحي أو العزل الصحي', status: false, points: 1, color: 'primary' }
      ]
    }
  },
  computed: {
    colorResult () {
      if (this.result <= 4) { return 'primary' } else if (this.result === 5) { return 'warning' } else { return 'error' }
    }
  },
  methods: {
    checked () {
      this.loading = true
      for (const i in this.data) {
        if (this.data[i].status) {
          this.result += this.data[i].points
        }
      }
      setTimeout(() => {
        this.loading = false
        this.dialog = true
      }, 3000)
    },
    newChecked () {
      this.dialog = false
      this.newCheck = false
      for (const i in this.data) {
        this.data[i].status = false
      }
      this.result = 0
    }
  },
  head () {
    return {
      title: 'افحص نفسك',
      meta: [
        { name: 'og:title', content: 'اختبار كشف الاصابة بفايروس كورونا' },
        { name: 'og:description', content: 'بروتوكل لتحديد حالات الاشتباه بفايروس كورونا من عدمه، إذ يعتمد على استخدام نظام النقاط' },
        { name: 'og:image', content: '~/assets/imgs/check.jpg' }

      ]
    }
  }

}
</script>
<style lang="scss">
 #label {
   font-family: 'El Messiri' !important;
   text-align: right;
 }
 #title, #card{
   font-family: 'El Messiri' !important;
   word-spacing: 5px;
 }

</style>
