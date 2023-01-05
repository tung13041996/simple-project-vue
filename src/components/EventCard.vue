<template>
  <router-link class="event-link" :to="{name: 'EventDetail', params: {id: event.id}}">
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.location }}</span>
    <h4>{{ event.title }}</h4>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-link {
  display:block;
  text-decoration:none;
  width: 100%;
  max-width: 300px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
}
.event-link:hover {
  border-color:#42b983;
}
.event-link:not(:last-child) {
  margin-bottom: 20px;
}
</style>
