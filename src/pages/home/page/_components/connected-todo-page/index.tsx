import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { fetchTodosStart } from '@/_redux/todos';
import { ConnectedForm } from '@/pages/home/page/_components/connected-form';
import { ConnectedTodoComponent } from '@/pages/home/page/_components/connected-todo-component';
import { Header } from '../header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Todo-page';

type PropsType = {
  fetchTodos: () => void;
};

class WrappedContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className={cn(BLOCK_NAME)}>
        <Header />
        <ConnectedForm />
        <ConnectedTodoComponent />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodosStart()),
});

export const ConnectedTodoPage = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
