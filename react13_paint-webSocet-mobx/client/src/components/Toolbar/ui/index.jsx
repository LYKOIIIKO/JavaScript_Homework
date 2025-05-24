import { Box, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import BrushIcon from "@mui/icons-material/Brush";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CircleIcon from "@mui/icons-material/Circle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { observer } from "mobx-react-lite";
import toolStore from "../../../store/toolStore";
import Brush from "../../../tools/Brush";
import canvasState from "../../../store/canvasState";
import Rect from "../../../tools/Rect";
import Circle from "../../../tools/Circle";
import Eraser from "../../../tools/Eraser";
import Line from "../../../tools/Line";
import { useState } from "react";

const Toolbar = observer(() => {
	const [color, setColor] = useState("#000000");

	const colorChange = (c) => {
		toolStore.setFillColor(c);
		toolStore.setStrokeColor(c);
	};

	const toolChange = (tool, color) => {
		toolStore.setTool(tool);
		colorChange(color);
	};

	return (
		<Box
			sx={{
				display: "flex",
				gap: "6px",
				alignItems: "center",
				padding: "4px 6px",
				boxShadow: "0 1px 2px #cdcdcd",
			}}
		>
			<IconButton
				onClick={() => toolChange(new Brush(canvasState.canvas), color)}
			>
				<BrushIcon />
			</IconButton>
			<IconButton
				onClick={() => toolChange(new Rect(canvasState.canvas), color)}
			>
				<CropSquareIcon />
			</IconButton>
			<IconButton
				onClick={() =>
					toolChange(new Circle(canvasState.canvas), color)
				}
			>
				<CircleIcon />
			</IconButton>
			<IconButton
				onClick={() =>
					toolChange(new Eraser(canvasState.canvas), "#ffffff")
				}
			>
				<DriveFileRenameOutlineIcon />
			</IconButton>
			<IconButton
				onClick={() => toolChange(new Line(canvasState.canvas), color)}
			>
				<HorizontalRuleIcon />
			</IconButton>
			<input
				type="color"
				onChange={(e) => {
					setColor(e.target.value);
					colorChange(e.target.value);
				}}
			/>
			<IconButton sx={{ marginLeft: "auto" }}>
				<UndoIcon />
			</IconButton>
			<IconButton>
				<RedoIcon />
			</IconButton>
			<IconButton>
				<SaveIcon />
			</IconButton>
		</Box>
	);
});

export { Toolbar };
