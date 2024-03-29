/**
 * @description 生成唯一的字符串
 * @param {number} len
 * @returns {string}
 */
function hash(len = 32) {
  const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxPos = $chars.length;
  let pwd = "";

  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return pwd;
}
