import crypto from 'node:crypto'

const getRandomBigIntGetter = (): bigint => {
  const randomHex = crypto.randomBytes(4).toString('hex')
  const randomBigInt = BigInt(parseInt(randomHex, 16))
  return randomBigInt
}

export { getRandomBigIntGetter }
