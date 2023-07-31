<template>
  <el-space>
    <efe-tag-plus enable-dot> Tag1 </efe-tag-plus>
    <efe-tag-plus enable-dot type="success"> Tag2 </efe-tag-plus>
    <efe-tag-plus enable-dot type="info"> Tag3 </efe-tag-plus>
    <efe-tag-plus enable-dot type="danger"> Tag4 </efe-tag-plus>
    <efe-tag-plus enable-dot color="transparent"> Tag5 </efe-tag-plus>
    <efe-tag-plus enable-dot type="success" color="transparent">
      Tag6
    </efe-tag-plus>
    <efe-tag-plus enable-dot type="info" color="transparent">
      Tag7
    </efe-tag-plus>
    <efe-tag-plus enable-dot type="danger" color="transparent">
      Tag8
    </efe-tag-plus>
  </el-space>
</template>

<script lang="ts" setup>
  import { ElSpace } from 'element-plus'
</script>
