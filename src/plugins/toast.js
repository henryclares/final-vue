import { toast } from 'bulma-toast';

export default {
  install(Vue) {
    const message = {
      add({ text, tipo }) {
        toast({
          message: text,
          type: tipo,
          duration: 2000,
          dismissible: true,
          pauseOnHover: true,
          // animate: { in: 'fadeIn', out: 'fadeOut' },
        });
      },
      success(
        text,
        { tipo } = {
          tipo: 'is-success',
        },
      ) {
        this.add({ text, tipo });
      },
      info(
        text,
        { tipo } = {
          tipo: 'is-info',
        },
      ) {
        this.add(text, tipo);
      },
      warning(
        text,
        { tipo } = {
          tipo: 'is-warning',
        },
      ) {
        this.add({ text, tipo });
      },
      error(
        text,
        { tipo } = {
          tipo: 'is-danger',
        },
      ) {
        this.add({ text, tipo });
      },
    };
    Vue.prototype.$message = message;
  },
};
