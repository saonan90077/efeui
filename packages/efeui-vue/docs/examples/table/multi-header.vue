<template>
  <efe-table :data="tableData" :columns="columns"></efe-table>
</template>

<script lang="ts" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
  ]

  const columns = [
    {
      type: 'default',
      label: 'Date',
      field: 'date',
    },
    {
      type: 'default',
      label: 'Delivery Info',
      field: 'deliveryInfo',
      extraProps: {
        children: [
          {
            type: 'default',
            label: 'Name',
            field: 'name',
          },
          {
            type: 'default',
            label: 'Address Info',
            field: 'addressInfo',
            extraProps: {
              children: [
                {
                  type: 'default',
                  label: 'State',
                  field: 'state',
                },
                {
                  type: 'default',
                  label: 'City',
                  field: 'city',
                },
                {
                  type: 'default',
                  label: 'Address',
                  field: 'address',
                },
                {
                  type: 'default',
                  label: 'Zip',
                  field: 'zip',
                },
              ],
            },
          },
        ],
      },
    },
  ]
</script>
