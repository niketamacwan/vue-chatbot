<template>
  <div class="chat container">
    <h2 class="text-primary text-center">Welcome to Chatbot</h2>
    <div class="card chatbox">
      <div class="card-body">
        <p class="nomessages text-secondary" v-if="messages.length == 0">
          [No messages yet!]
        </p>
        <!--shows list of messages-->
        <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
          <div class="chatMsg" v-for="message in messages" :key="message.id">
            <span class="text-info">[{{ message.name }}]: </span>
            <span>{{ message.message }}</span>
            <span class="text-secondary time">{{ message.timestamp }}</span>
          </div>
        </div>
      </div>
      <!--adding type message component-->
      <div class="card-action">
        <CreateMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import fb from "@/firebase/init";
import moment from "moment";

/*fetch the list of messages from firebase and view it*/
export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    //order the list of messages by timestamp
    let ref = fb.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format(
              "MMMM Do YYYY, h:mm:ss a"
            )
          });
        }
      });
    });
  }
};
</script>

<style>
.chat h2 {
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.5;
  font-style: normal;
  color: #4fc08d !important;
  font-size: 2.25rem;
  margin: 10px 0;
  padding: 0;
}

.chatbox {
  display: block;
  max-width: 600px;
  margin: 10px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  border: 0;
}

.chat .chatMsg {
  text-align: left;
}

.chat span {
  font-size: 1.2em;
}

.chat .time {
  display: block;
  font-size: 0.6em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
