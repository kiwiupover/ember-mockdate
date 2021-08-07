import Component from '@glimmer/component';

export default class FormatDateComponent extends Component {
  get formattedYear() {
    return new Date().getFullYear();
  }
}
