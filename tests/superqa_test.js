module.exports = {
  "Verify 'About us' tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .click(".aboutus-tab")
      .verify.urlEquals("https://superqa.herokuapp.com/aboutus")
      .end()
  },

  "Verify 'Courses' tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .click(".courses-tab")
      .verify.urlEquals("https://superqa.herokuapp.com/courses")
      .end()
  },

  "Verify 'Staff' tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .click(".staff-tab")
      .verify.urlEquals("https://superqa.herokuapp.com/staff")
      .end()
  },

  "Verify 'Login' modal" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .click(".login")
      .verify.elementPresent(".loginForm")
      .click(".login")
      .end()
  },
  
  "Verify 'Registration' modal" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .click(".register")
      .verify.elementPresent(".registrationForm")
      .click(".register")
      .end()
  }
};
