import _ from 'lodash'

const events = [
  {
    "title": "Web API",
    "start": new Date("Tue Sep 7 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 7 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": " https://www.facebook.com/GtWebdev",
    "image": "/img/internet.png",
    "description": "Have you ever wondered how your web browser communicates with a server? Did you know that you can integrate your web applications with other web apps like Facebook, Google, or anything? Come to this meeting to learn more about the basics of Web API. We're also going to build a web app that is integrated with Facebook and Microsoft's Machine Learning Service."
  },
  {
    "title": "HTML/CSS",
    "start": new Date("Tue Sep 6 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Sep 6 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 2456",
    "rsvpLink": " https://www.facebook.com/events/1780166582229539/",
    "image": "/img/html5-logo.png",
    "description": "A web app without HTML/CSS is like a bird without wings. Learn the basics of web development by mastering HTML/CSS."
  },
  {
    "title": "Login Systems (Webdev Talk)",
    "start": new Date("Wed Aug 31 2016 18:30:00 GMT-0400 (EDT)"),
    "end": new Date("Wed Aug 31 2016 20:30:00 GMT-0400 (EDT)"),
    "location": "CCB 340",
    "rsvpLink": "https://facebook.com/events/171006130000571/",
    "image": "/img/auth0.png",
    "description": "Almost every web application needs a login system. Learn how to efficiently create a secure login system using auth0 API in this meeting."
  },
  {
    "title": "Introduction to gt-webdev!",
    "start": new Date("Tue Aug 30 2016 18:00:00 GMT-0400 (EDT)"),
    "end": new Date("Tue Aug 30 2016 20:00:00 GMT-0400 (EDT)"),
    "location": "Klaus 1443",
    "rsvpLink": "https://facebook.com/GtWebdev",
    "image": "/img/gt-webdev-icon.png",
    "description": "Welcome to gt-webdev! Learn what gt-webdev is all about and expect a great meeting!"
  }
];

const nextEvent = (() => {
  const now = new Date();
  return _.reduce(events, (result, e) => {
    return e.end > now && e.end < result.end ? e : result;
  });
})();

const upcomingEvents = (() => {
  const now = new Date();
  return _.filter(events, (e) => {
    return e.end > now && e.end != nextEvent.end;
  }).sort((a, b)  => {
    return a.start < b.start ? -1 : 1;
  });
})();

const pastEvents = (() => {
  const now = new Date();
  return _.filter(events, (e) => {
    return e.end < now;
  }).sort((a, b) => {
    return a.start < b.start ? 1 : -1;
  });
})();

module.exports = {
  events,
  nextEvent,
  upcomingEvents,
  pastEvents
}
