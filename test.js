var page = require('webpage').create()

page.paperSize = {
  format: 'A4',
  orientation: 'portrait',
  margin: '1cm'
}

page.open('test.html', function (status) {
  if (status !== 'success') return phantom.exit(1)

  page.render('test.pdf')
  phantom.exit(0)
})
