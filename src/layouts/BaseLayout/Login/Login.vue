<template>
  <a-form id="login-form" :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名称!' }] },
        ]"
        placeholder="用户名称"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入用户密码!' }] },
        ]"
        type="password"
        placeholder="用户密码"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
        <a-checkbox class="fl" @change="onChange" v-decorator="['remember']">
            记住密码
        </a-checkbox>
        <router-link class="fr" to="/">忘记密码</router-link>
    </a-form-item>
    <a-form-item>
      <a-button
        class="w100p"
        type="primary"
        html-type="submit"
        :disabled="hasErrors(form.getFieldsError())"
      >登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { Form, Input, Button, Icon, Checkbox } from "ant-design-vue";
import { setToken, localSave } from '@/libs/utils';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: "Login",
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox
  },
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          if(values.remember){
              localSave('login_info', values)
          }
          setToken('token')
          this.$router.push('/MainLayout/Home')
        }
      });
    },
    onChange(e){
        console.log(`checked = ${e.target.checked}`);
    }
  },
};
</script>
<style lang="less" scoped>
    #login-form{
        text-align: left;
    }
</style>