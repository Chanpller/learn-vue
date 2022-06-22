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
          this.$bus.$on('compentEvent',(studentName)=>{
            this.studentName = studentName;
        })
      },
      beforeDestroy() {
        this.$bus.$off('compentEvent');
      }
    }
</script>

<style scoped>

</style>