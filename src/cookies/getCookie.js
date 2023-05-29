function getCookie(name) {
    const cookie = document.cookie.split(';').map(cookie => cookie.trim());
    for (let i = 0; i < cookie.length; i++) {
      const cookiePair = cookie[i].split('=');
      if (cookiePair[0] === name) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

export default getCookie;