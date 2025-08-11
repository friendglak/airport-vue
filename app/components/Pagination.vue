<template>
  <div class="flex items-center justify-center space-x-2">
    <!-- Previous page button -->
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Anterior
    </button>

    <!-- Page numbers -->
    <div class="flex items-center space-x-1">
      <!-- First page -->
      <button
        v-if="showFirstPage"
        @click="goToPage(1)"
        class="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        1
      </button>

      <!-- Ellipsis before current range -->
      <span v-if="showFirstEllipsis" class="px-3 py-2 text-sm text-gray-500">
        ...
      </span>

      <!-- Page range -->
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-2 text-sm font-medium rounded-md border',
          page === currentPage
            ? 'bg-blue-600 text-white border-blue-600'
            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50',
        ]"
      >
        {{ page }}
      </button>

      <!-- Ellipsis after current range -->
      <span v-if="showLastEllipsis" class="px-3 py-2 text-sm text-gray-500">
        ...
      </span>

      <!-- Last page -->
      <button
        v-if="showLastPage"
        @click="goToPage(totalPages)"
        class="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        {{ totalPages }}
      </button>
    </div>

    <!-- Next page button -->
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Siguiente
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  pageChange: [page: number];
}>();

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("pageChange", page);
  }
};

// Calculate visible pages
const visiblePages = computed(() => {
  const delta = 2;
  const range: number[] = [];
  const rangeWithDeltas = delta * 2 + 1;

  if (props.totalPages <= rangeWithDeltas) {
    for (let i = 1; i <= props.totalPages; i++) {
      range.push(i);
    }
  } else {
    const leftBound = Math.max(1, props.currentPage - delta);
    const rightBound = Math.min(props.totalPages, props.currentPage + delta);

    for (let i = leftBound; i <= rightBound; i++) {
      range.push(i);
    }
  }

  return range;
});

const showFirstPage = computed(() => {
  return (visiblePages.value?.[0] ?? 0) > 1;
});

const showLastPage = computed(() => {
  return (
    (visiblePages.value?.[visiblePages.value.length - 1] ?? 0) <
    props.totalPages
  );
});

const showFirstEllipsis = computed(() => {
  return (visiblePages.value?.[0] ?? 0) > 2;
});

const showLastEllipsis = computed(() => {
  return (
    (visiblePages.value?.[visiblePages.value.length - 1] ?? 0) <
    props.totalPages - 1
  );
});
</script>
