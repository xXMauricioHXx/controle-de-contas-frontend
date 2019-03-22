<template>
  <div id="app" class="row app-container">
    <sidebar/>
    <div class="col-xs-12 col-sm-9">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/shared/Sidebar.vue";

export default {
  components: {
    sidebar: Sidebar
  }
};
</script>>
<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background-color: #fbfcfc;
}
button,
input:focus {
  box-shadow: 0 0 0 0;
  border: 1px solid #ededed;
  outline: 0;
}
.app-container {
  padding: 0px !important;
  margin: 0px !important;
}
.table-custom {
  padding: 3rem 3rem;
  display: inline-block;
  width: 100%;
}
.table-custom .table {
  margin: 0px;
}
.table-custom .table thead tr {
  display: table;
}
.table-item {
  margin: 0px 1px 0px 1px;
  display: block;
}
.table-item .table-columns {
  border-bottom: 1px solid #ebe9e9;
  padding: 3rem 0;
}
.table-columns:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
.table-custom .table-head {
  margin: 0px 1px 0px 1px;
  border-bottom: 1px solid #ebe9e9;
  font-weight: bold;
  padding-bottom: 1rem;
  font-size: 1.5rem;
}
.table-custom .table-item .table-actions li a:hover {
  opacity: 0.5;
  cursor: pointer;
}
.table-custom .table-description {
  min-height: 0vh;
  display: none;
  width: 100%;
  border: 1px solid #ebe9e9;
  margin: 0px 1px 0px 1px;
  padding-bottom: 2rem;
  transition: 0.5s;
}
.table-description ul {
  padding: 0px;
}
.table-description ul li {
  display: block;
  padding: 3rem 0px;
}
.table-description .description-title {
  font-weight: bold;
  font-size: 1.4rem;
}
.table-custom .slide-down {
  min-height: 30vh;
  display: block;
}
.table-custom .slide-up {
  min-height: 0vh;
  display: none;
}
.ctm-btn:hover {
  background-color: #531c8a;
  color: #fff;
}
.danger-btn:hover {
  background-color: hsl(20, 3%, 77%);
  color: #333;
}
.ctm-btn {
  border: 1px solid #639;
  padding: 1rem 5rem;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: bold;
}
.success-btn {
  background-color: #639;
  color: #fff;
}
.ctm-form {
  width: 100%;
  padding: 2rem 5rem 1rem 5rem;
  display: inline-block;
}
.ctm-form .ctm-intput {
  border-radius: 0px;
  background-color: #fbfcfc;
  border-radius: 5px;
}
.ctm-form .valid-input {
  border-color: #4caf50 !important;
  box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25) !important;
}
.ctm-form .valid-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
}

.ctm-form .ctm-intput:focus {
  color: #665c70;
  background-color: #fff !important;
  border-color: #a679d2;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
}
.ctm-form .ctm-select:focus {
  color: #665c70;
  background-color: #fff;
  border-color: #a679d2;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
}
.ctm-form label {
  color: #332e38;
}
.ctm-form .error-message {
  display: block;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  font-weight: bold;
  color: #cd3333;
}
.ctm-form .invalid-input-error {
  border-color: #d22346 !important;
  box-shadow: 0 0 0 0.2rem rgba(210, 35, 70, 0.25);
}

.ctm-form .invalid-input-error:focus {
  border-color: #d22346 !important;
  box-shadow: 0 0 0 0.2rem rgba(210, 35, 70, 0.25) !important;
}
.ctm-form .required-input {
  color: #cd3333;
  margin-left: 0.5rem;
}
.input-extra-small {
  max-width: 15%;
}
.input-small {
  max-width: 35%;
}
.input-medium {
  max-width: 55%;
}
.input-large {
  max-width: 70%;
}
.input-extra-large {
  max-width: 100%;
}

.ctm-form .ctm-select {
  background: none;
  text-align: left;
  border: 1px solid #cccccc;
  background-color: #fbfcfc;
}
.ctm-form .ctm-select .caret {
  float: right;
  margin-top: 0.9rem;
}
.ctm-form .ctm-select .dropdown-menu {
  width: 100%;
  border-radius: 0px;
}
.ctm-btn-group .dropdown-menu {
  width: 95%;
  margin-left: 1.3rem;
}
.ctm-form .ctm-select .ctm-placeholder {
  color: #9999a5;
}
.ctm-form .ctm-select-item {
  padding: 1rem;
}
.ctm-form .ctm-select-item:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
.ctm-input-raidio span {
  margin-right: 0.5rem;
}
.ctm-input-raidio {
  display: inline;
  margin-right: 5rem;
}
.form-footer {
  width: 100%;
  text-align: right;
  padding-top: 2rem;
}
.form-footer button {
  width: 100%;
  margin-bottom: 1rem;
}
@media (max-width: 767px) {
  .table-custom {
    padding: 3rem 1rem;
  }
  .table-item .table-columns {
    padding: 4rem 0px;
  }
  .table-custom .table-description {
    padding: 1rem;
  }
  .table-custom .table-description ul {
    padding: 0px;
  }
  .table-description ul li {
    padding: 2rem 0px;
  }
  .table-column {
    padding: 0px 8px;
  }
  .table-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  .ctm-form {
    width: 100%;
    padding: 1rem 1rem 1rem 1rem;
    display: inline-block;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .table-custom {
    padding: 2rem 1rem;
  }
  .table-btn {
    margin-right: 1rem;
  }
}
</style>
