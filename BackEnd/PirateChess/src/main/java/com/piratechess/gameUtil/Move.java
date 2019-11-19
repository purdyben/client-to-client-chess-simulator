package com.piratechess.gameUtil;

/**
 * @author Colby McKinley
 *
 */
public class Move {
	private int x1, y1, x2, y2;
	private boolean castling = false;

	public Move(int x1, int y1, int x2, int y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
	
	public Move(int x1, int y1, int x2, int y2, boolean castling) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.castling = castling;
	}

	public int getX1() {
		return x1;
	}

	public void setX1(int x1) {
		this.x1 = x1;
	}

	public int getX2() {
		return x2;
	}

	public void setX2(int x2) {
		this.x2 = x2;
	}

	public int getY1() {
		return y1;
	}

	public void setY1(int y1) {
		this.y1 = y1;
	}

	public int getY2() {
		return y2;
	}

	public void setY2(int y2) {
		this.y2 = y2;
	}
	
	public boolean isCastling() {
		return castling;
	}
	
	public String toString(){
		return (char)('A'+x1) + "" + (y1+1) + " " + (char)('A'+x2) + "" + (y2+1);
	}
	
	/**
	 * This is some fucking beautiful ass codes
	 * To bad its No-Nut November.
	 */
	public boolean equals(Object o){
		if(o == this)
			return true;
		if(o == null || o.getClass() != this.getClass())
			return false;
		Move op = (Move) o;
		return (op.getX1() == x1 && op.getY1() == y1 && op.getX2() == x2 && op.getY2() == y2);
	}
}
