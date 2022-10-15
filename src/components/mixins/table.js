export default {
  methods: {
    updateList(className = 'btn-refresh-list') {
      if (document.getElementsByClassName(className)) {
        for (const item of document.getElementsByClassName(className)) {
          item.dispatchEvent(new window.Event('click', { cancelable: true }));
        }
      }
    },
    async list(url) {
      return await this.$service
        .get(url)
        .then((data) => {
          //   this.items = data;
          return data;
        })
        .catch((err) => this.$message.error(err));
    },
    async register(url, body) {
      return await this.$service
        .post(url, body)
        .then((data) => {
          if (data) {
            return this.list(url);
          }
        })
        .catch((err) => this.$message.error(err));
    },
  },
};
