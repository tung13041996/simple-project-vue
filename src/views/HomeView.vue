<template>
  <h1>Events For Good</h1>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          category: "Event",
          title: "Title 1",
          description: "Description 1",
          location: "Vietnam",
          date: "April 13, 2022",
          time: "12:00",
          petsAllow: true,
          organization: "Steven",
        },
        {
          id: 2,
          category: "Event",
          title: "Title 2",
          description: "Description 2",
          location: "Vietnam",
          date: "April 13, 2022",
          time: "13:00",
          petsAllow: true,
          organization: "Frank",
        },
        {
          id: 3,
          category: "Event",
          title: "Title 3",
          description: "Description 3",
          location: "Vietnam",
          date: "April 13, 2022",
          time: "12:00",
          petsAllow: true,
          organization: "Alex",
        },
        {
          id: 4,
          category: "Event",
          title: "Title 4",
          description: "Description 4",
          location: "Vietnam",
          date: "April 13, 2022",
          time: "12:00",
          petsAllow: true,
          organization: "Michael",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
