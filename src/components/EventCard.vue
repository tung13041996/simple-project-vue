<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.location }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  width: 100%;
  max-width: 300px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
}
.event-card:not(:last-child) {
  margin-bottom: 20px;
}
</style>
