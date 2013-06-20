/**
 * This is a JavaScript translation of rand() from glibc. The 32-bit integer
 * multiplication has been modified to work in JavaScript. Multiplying two
 * 32-bit integers directly requires 64 bits of precision, but JavaScript only
 * has 53-bit integers (a 64-bit double has a 53-bit mantissa). This means the
 * multiplication must be split into two 16-bit vs 32-bit multiplications
 * instead, which only needs 48 bits for the result. Note that setting
 * properties on "this" works both in browsers and in node with require().
 *
 * Original glibc implementation:
 *
 *    int rand() {
 *      static int seed = 1;
 *      return seed = (seed * 1103515245 + 12345) & 0x7FFFFFFF;
 *    }
 *
 */
(function() {

  function rand() {
    return seed = (seed * 20077 + (seed & 0xFFFF) * 1103495168 + 12345) & 0x7FFFFFFF;
  }

  function frand() {
    return rand() / 0x7FFFFFFF;
  }

  function srand(start) {
    seed = (start & 0x7FFFFFFF) || 1;
  }

  var seed = 1;
  this.rand = rand;
  this.frand = frand;
  this.srand = srand;
  this.RAND_MAX = 0x7FFFFFFF;

}).call(this);
