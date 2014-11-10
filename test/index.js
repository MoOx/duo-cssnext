var fs = require("fs")

var test = require("tape")
var duo = require("duo")
var cssnext = require("..")

test("duo-cssnext", function(t) {
  duo(__dirname)
    .use(cssnext())
    .entry("fixtures/index.css")
    .run(function(err, css) {
      if (err) {
        t.fail(err)
      }

      t.ok(css, fs.readFileSync("test/fixtures/index.expected.css", "utf8").trim(), "cssnext plugin works")
      t.end()
    })
})

test("duo-cssnext options", function(t) {
  duo(__dirname)
    .use(cssnext({compress: true}))
    .entry("fixtures/index.css")
    .run(function(err, css) {
      if (err) {
        t.fail(err)
      }

      t.ok(css, fs.readFileSync("test/fixtures/index-compressed.expected.css", "utf8").trim(), "cssnext options works")
      t.end()
    })
})

test("duo-cssnext error", function(t) {
  duo(__dirname)
    .use(cssnext())
    .entry("fixtures/error.css")
    .run(function(err) {
      if (err) {
        t.pass("cssnext errors are detected ")
        t.end()
        return
      }

      t.fail("cssnext error not detected")
    })
})
