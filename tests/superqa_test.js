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
  },

  "Verify \"login\"" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible('body', 1000)
      .click('.login')
      .pause(1000)
      .setValue('input[name=email]', 'wasietest1@gmail.com')
      .setValue('input[type=password]', 'password')
      .pause(1000)
      .click(".button")
      .pause(1000)
      .verify.containsText(".menuContainer", "Accounts")
  },

  "Verify \"register\"" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible('body', 1000)
      .click('.register')
      .pause(1000)
      .setValue('input[type=email]', 'wasie1@gmail.com')
      .setValue('input[name=fullname]', 'w1')
      .setValue(".registrationForm input:nth-child(3)", 'password')
      .setValue(".registrationForm input:nth-child(4)", 'password')
      .click("input[value=register]")
      .end();



  }
};
