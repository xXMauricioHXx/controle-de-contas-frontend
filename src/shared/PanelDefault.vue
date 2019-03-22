<template>
  <div class="panel-default">
    <div class="row panel-head">
      <div class="col-xs-12">
        <h1 class="panel-title">{{title}}</h1>
      </div>      
      <div class="col-xs-12 content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.panel-default {
  border: 1px solid #ededed;
  min-height: 50rem;
  margin: 5rem 2rem;
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 3px 52px -16px rgba(0, 0, 0, 0.75);
}
.panel-default .panel-head {
  margin: 0px;
  display: block;
}
.panel-default .panel-title {
  font-size: 3rem;
  line-height: 1;
  padding: 3rem;
  margin: 0;
  color: #332e38;
  letter-spacing: 0.3px;
}
.panel-default .content {
  display: contents;
}

@media (max-width: 767px) {
  .panel-default {
    box-shadow: none;
    margin: 1rem 0rem;
    width: auto;
  }
  .panel-default .panel-title {
    padding: 1rem 0rem;
  }
  .panel-default .panel-head .panel-info {
    padding: 1rem;
  }
  .panel-default .panel-head .panel-actions {
    padding: 1rem 0rem;
  }
}
</style>
