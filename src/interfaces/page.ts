export default interface IPage {
    name?: string;
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export type IBgColor = 'purple' | 'blue' | 'green' | 'orange' | 'red';
