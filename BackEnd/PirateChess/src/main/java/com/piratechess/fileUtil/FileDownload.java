/**
 * 
 */
package com.piratechess.fileUtil;

import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;

/**
 * @author Colby McKinley
 *
 */
public class FileDownload {

	public static void downloadWithJavaIO(String url, String localFilename) {

		try (BufferedInputStream in = new BufferedInputStream(new URL(url).openStream());
				FileOutputStream fileOutputStream = new FileOutputStream(localFilename)) {

			byte dataBuffer[] = new byte[1024];
			int bytesRead;
			while ((bytesRead = in.read(dataBuffer, 0, 1024)) != -1) {
				fileOutputStream.write(dataBuffer, 0, bytesRead);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}