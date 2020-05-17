<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>
        </form>
    </div>
</template>

<script>
    import fb from '@/firebase/init';

    export default {
        name: 'CreateMessage',
        props: ['name'],
        data() {
            return {
                newMessage: null,
                errorText: null
            }
        },
        methods: {
            createMessage() {
                //if new message not empty
                if (this.newMessage) {
                    //save it to firebase collection
                    fb.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err);
                    });
                    //reset message input & error text
                    this.newMessage = null;
                    this.errorText = null;
                }
                //no message entered show error message
                else {
                    this.errorText = "A message must be entered!"
                }
            }
        }
    }

</script>
