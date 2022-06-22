<template>
    <div>
        <h1 ref="h1name">
            学校名字：{{name}}
        </h1>
        <h1>
            学校地址：{{adress}}
        </h1>
        <h1>
            学生名字：{{studentName}}
        </h1>

    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name: 'School',
        props:['getSchoolName'],
        data(){
            return {
                name:'Vue学校',
                adress:'银河路2号',
                studentName:''
            }
        },
      mounted() {
        this.pubid = pubsub.subscribe('student',(msgName,studentName)=>{
          this.studentName = studentName;
        });
      },
      beforeDestroy() {
        pubsub.unsubscribe( this.pubid);
      }
    }
</script>

<style scoped>

</style>