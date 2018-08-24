<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <Feedback :questions="questions" comments/>
    </v-content>
  </v-app>
</template>

<script>
import Feedback from "./components/Feedback";

export default {
  name: "App",
  components: {
    Feedback
  },
  data() {
    return {
      title: "Give Us Your Feedback!",
      questions: [
        "If my instructor used these apps, it would enhance my understanding in the classroom.",
        "The interactivity of the apps is more effective at teaching the topics than traditional teaching methods like textbooks and powerpoints.",
        "The interactivity of the apps motivated me to want to use them."
      ]
    };
  }
};
</script>
