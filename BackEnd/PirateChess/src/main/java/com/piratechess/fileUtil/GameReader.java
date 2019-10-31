package com.piratechess.fileUtil;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class GameReader {

	public String readAllLines(BufferedReader reader) throws IOException {
		StringBuilder content = new StringBuilder();
		String line;

		while ((line = reader.readLine()) != null) {
			content.append(line);
			content.append(System.lineSeparator());
		}

		return content.toString();
	}

	public String readFile() {
		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new FileReader("src/main/resources/input.txt"));
			String content = readAllLines(reader);
			return content;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		} finally {
			try {
				if (reader != null) {
					reader.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static ArrayList<String> getFileAsArrayList(String filename) throws IOException {
		ArrayList<String> result = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {

            while (br.ready()) {
                result.add(br.readLine());
            }
            return result;
        }
	}
}
