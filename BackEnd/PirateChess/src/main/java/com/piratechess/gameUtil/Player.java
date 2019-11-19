package com.piratechess.gameUtil;

/**
 * 
 * @author Colby McKinley
 * 
 */
public abstract class Player {

	boolean color;
	
	public Player(boolean color) {
		this.color = color;
	}


	/**
	 * Function to prompt the player to make a move after the first move has
	 * already been made
	 * 
	 * @param b
	 *            the board to parse
	 * @return the selected move
	 */
	public Move getNextMove(Board b) {
		return null;
	}

	public boolean getColor() {
		return color;
	}

	public void setColor(boolean color) {
		this.color = color;
	}
}
