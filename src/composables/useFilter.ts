import { useAppStore } from "@/stores/app";
export interface Props {
  filterName: string;
}
export const useFilter = ({ filterName }: Props) => {
  const appStore = useAppStore();
  const originalItems = appStore.items.slice(); // Create a copy of original items

  const filterByTitle = (value: string) => {
    appStore.items = originalItems.filter(el =>
      (el['title'] as string).toLowerCase().trim().includes(value.trim())
    );
  }

  const filterByYear = (value: number) => {
    appStore.items = originalItems.filter(el =>
      el['year'] == value
    );
  }
  const filterByActorsCount = (value: number) => {
    appStore.items = originalItems.filter(el =>
      (el['actors'] as []).length == value
    );
  }
  const handleFilter = (value: any) => {
    if (value) {
      switch (filterName) {
        case 'title':
          filterByTitle(value);
          break;
        case 'year':
          filterByYear(value)
          break;
        case 'actors':
          filterByActorsCount(value)
      }
    } else {
      appStore.items = originalItems; // Reset to original items when filter is cleared
    }
  };

  return { handleFilter, };
};
