
/*
* A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
* Digest Algorithm, as defined in RFC 1321.
* Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
* Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
* Distributed under the BSD License
* See http://pajhome.org.uk/crypt/md5 for more info.
*/



class md5 {
  constructor () {
    this.lastResponse = null;
  }
  getInfo () {
    return {
      id: 'md5',
      name: 'md5',
      blocks: [
        {
          opcode: 'encrypt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'encrypt [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ' '
            }
          }
        }
      ]
    };
  }

  _md5 (url) {
    return hex_md5(url)
      .then(r => {
        this.lastResponse = r;
        return r;
      });
  }

  get (args) {
    return this._md5(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new md5());

