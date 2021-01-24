import React, { ReactFragment } from 'react';
import clsx from 'clsx';
import { Backdrop, Paper, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '.';
/* ====[Window 사용 예시]========
type: 전달할 className
open: window가 열려있는가
hasCloseBtn: window 닫는 버튼을 가지고 있는가
handleWindowClose: window를 닫는 함수
children: window 안에 들어갈 내용
================================
*/
type WindowProps = {
	type: string;
	open: boolean;
	hasCloseBtn?: boolean | undefined;
	handleWindowClose?: () => void | undefined;
	children: ReactFragment;
}

const Window = ({
	type, open, hasCloseBtn, handleWindowClose, children
}: WindowProps) => (
	<>
		{ open &&
			<Grid className="window-background">
				<Grid className="window-background-header" />
				<Backdrop className="window-backdrop" open={open}>
					<Paper className={clsx('window', type)}>
						{hasCloseBtn &&
							<Grid className="window-closebutton">
								<Button
									classList={['']}
									value={<CloseIcon />}
									transparent={true}
									onClickFun={handleWindowClose}
								/>
							</Grid>}
						<Grid className="window-content">
							{children}
						</Grid>
					</Paper>
				</Backdrop>
			</Grid>}
	</>
);

Window.defaultProps = {
	hasCloseBtn: undefined,
	handleWindowClose: undefined,
};

export default Window;
