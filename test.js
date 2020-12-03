import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 1971', () => { strictEqual(anoSanto(1971), true) })
  it('test 2020', () => { strictEqual(anoSanto(2020), false) })
  it('test 2021', () => { strictEqual(anoSanto(2021), true) })
  it('test 2022', () => { strictEqual(anoSanto(2022), false) })
  it('test 2023', () => { strictEqual(anoSanto(2023), false) })
  it('test 2024', () => { strictEqual(anoSanto(2024), false) })
  it('test 2025', () => { strictEqual(anoSanto(2025), false) })
  it('test 2026', () => { strictEqual(anoSanto(2026), false) })
  it('test 2027', () => { strictEqual(anoSanto(2027), true) })
  it('test 2028', () => { strictEqual(anoSanto(2028), false) })
  it('test 2029', () => { strictEqual(anoSanto(2029), false) })
  it('test 2030', () => { strictEqual(anoSanto(2030), false) })
  it('test 2031', () => { strictEqual(anoSanto(2031), false) })
  it('test 2032', () => { strictEqual(anoSanto(2032), true) })
  it('test 2038', () => { strictEqual(anoSanto(2038), true) })
  it('test 2094', () => { strictEqual(anoSanto(2094), true) })
  it('test 2105', () => { strictEqual(anoSanto(2105), false) })
  it('test 2106', () => { strictEqual(anoSanto(2106), true) })
  it('test 2107', () => { strictEqual(anoSanto(2107), false) })

})