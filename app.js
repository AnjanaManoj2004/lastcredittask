const app = Vue.createApp({
  data() {
      return {
          // 6a. List Rendering
          // 1. Text Interpolation
          task_data: [],
          new_Task: "",
      };
  },
  methods: {
      // 2. Methods
      //2.Methods
      removetask_data(index) {
          this.task_data.splice(index, 1);
      },
      add_Task() {
          // 8a. Form Input Bindings (v-model)
          //2.Methods
          if (this.new_Task.trim() !== "") {
            // 6. List Rendering
                // b. v-for with v-if
              this.task_data.push({ text: this.new_Task, completed: false });
              this.new_Task = "";
          }
      },
  },
  components: {
      'custom-component': {
          props: ['message'],
          template: `
              <div>
                  <!-- 1b. Raw HTML (v-html) -->
                  <h2>Greetings</h2>
                  <p>Hello and Welcome</p>
                  <!-- 10c. Slots -->
                  <slot name="customSlot"></slot>
              </div>
          `,
      },
  },
  computed: {
      // 4. Computed Properties
      completedTaskCount() {
          return this.task_data.filter(task => task.completed).length;
      },
  },
  setup() {
    const characterCount = ref(0);

    // 9. Watchers
    watch(() => {
        characterCount.value = this.new_Task.length;
    });

    return {
        characterCount,
    };
  },
});
//11.Router
app.mount("#app");
