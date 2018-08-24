<template>
    <v-slide-y-transition mode="out-in">
        <v-container grid-list-md>
            <v-layout row wrap align-center justify-center>
                <v-flex>
                    <v-card>
                        <v-card-title>
                            <v-text-field prepend-icon="face" label="Name/Email (optional)" persistent-hint single-line clearable v-model="name"></v-text-field>
                        </v-card-title>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card>
                        <v-card-title primary-title>
                            <h2>
                                Assess each statement as it applies to your experience with the apps.
                            </h2>
                        </v-card-title>
                    </v-card>
                </v-flex>

                <v-flex xs12 v-for="(q,index) in questions" :key="q">
                    <v-card>
                        <v-card-title primary-title>
                            <h3>{{q}}</h3>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-radio-group v-model="feedback[index]" row>
                                <v-radio class="caption" v-for="a in answers" :key="a" :label="`${a}`" :value="a"></v-radio>
                            </v-radio-group>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex>
                    <v-card v-if="comments">
                        <v-card-title primary-title>
                            <h3>Additional Comments</h3>
                        </v-card-title>
                        <v-textarea v-model="commentFeedback" label="What do you think?" counter maxlength="120" full-width single-line></v-textarea>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2>
                    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2>
                </v-flex>
                <v-btn fixed dark fab bottom right color="primary" @click=" dialog = true">
                    <v-icon>send</v-icon>
                </v-btn>
                <v-dialog v-model="dialog" width="600px">
                    <v-card>
                        <v-card-title>
                            <h4>Copy this text below and email it to {{email}} with the subject {{title}} or just click the button at the bottom!</h4>

                        </v-card-title>
                        <v-card-text>
                            <v-textarea :value="feedbackBody" readonly full-width single-line></v-textarea>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="submit">
                                Email Us
                                <v-icon right dark>email</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
    </v-slide-y-transition>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      default: function() {
        return ["What is your favorite number?"];
      }
    },
    comments: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      default: "____@whatever.com"
    },
    title: {
      type: String,
      default: "My app"
    }
  },
  data: function() {
    return {
      dialog: false,
      name: "",
      answers: [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
      ],
      commentFeedback: "",
      feedback: Array(this.questions.length).fill("N/A")
    };
  },
  computed: {
    feedbackBody: function() {
      let ans = this.questions.map((text, index) => {
        return { text: text, answer: this.feedback[index] };
      });
      let body = {
        name: this.name,
        survey: ans,
        comments: this.commentFeedback
      };
      return JSON.stringify(body);
    }
  },
  methods: {
    submit() {
      let subject = `${this.title} Feedback`;
      window.open(
        `mailto:${this.email}?subject=${subject}&body=${this.feedbackBody}`
      );
    }
  }
};
</script>

<style scoped>
.smaller {
  font-size: 12px;
}
</style>
