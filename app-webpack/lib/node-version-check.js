// version-check

const version = process.version.split('.')
const major = parseInt(version[0].replace(/\D/g, ''), 10)
const minor = parseInt(version[1].replace(/\D/g,''), 10)
const patch = parseInt(version[2].replace(/\D/g,''), 10)

const min = {
  major: 14,
  minor: 15,
  patch: 1
}

if (
  major < min.major || (
    major === min.major && (
      minor < min.minor || (minor === min.minor && patch < min.patch)
    )
  )
) {
  console.error()
  console.error('--------------------------------------------------------')
  console.error(' INCOMPATIBLE NODE VERSION')
  console.error(` @quasar/app-webpack requires Node ${min.major}.${min.minor}.${min.patch} or superior`)
  console.error()
  console.error(' You are running Node ' + process.version)
  console.error(' Please install a compatible Node version and try again')
  console.error('--------------------------------------------------------')
  console.error()

  process.exit(1)
}
