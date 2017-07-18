#!/usr/bin/env node

for (let i = 0; i < 10; i++) {
  let meows = []
  let meow_num = Math.random() * 10 + 1
  for (let meow = 0; meow < meow_num; meow++)
    meows.push('meow')
  if (i % 2 == 0) meows.unshift(' ')
  meows = meows.join('🐱')
  console.log(meows)
}
