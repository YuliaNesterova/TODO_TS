import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { fetchTodosStart } from '@/_redux/todos';
import { ConnectedTodoForm } from '@/pages/home/page/_components/form/form';
import { ConnectedList } from '@/pages/home/page/_components/todo-list/todo-list';
import { Header } from '../header/header';
import styles from './todo-component.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Page';

type PropsType = {
  fetchTodos: () => void;
};

class TodoComponent extends Component<PropsType> {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    return (
      <div className={cn(BLOCK_NAME)}>
        <Header />
        <ConnectedTodoForm />
        <ConnectedList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodosStart()),
});

export const ConnectedTodoComponent = connect(
  null,
  mapDispatchToProps,
)(TodoComponent);
